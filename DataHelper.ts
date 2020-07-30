//DataHelper类-负责localStorage操作
class DataHelper {
  datakey:string;
  primarykey:string;

  //构造函数 --作用：为对象 添加 各种属性
constructor(datakey: string,primarykey: string) {
  this.datakey = datakey;
  this.primarykey = primarykey;
  }
  //1.读取全部数据，返回数组（如果没有读取到数据则返回空数组）
  readData():any{
    let strData = localStorage.getItem(this.datakey);

    let arrData:any = [];
    if(strData!=null){
      arrData = JSON.parse(strData);
    }
    return arrData;
  }
  //2.存入本地数据
  saveData(arrData:Array<Object>):void{
    let str:string = JSON.stringify(arrData);

    localStorage.setItem(this.datakey,str);
  }
  //3.新增数据
  addData(conStr:string): number {
    // 1.读取本地数据
    let arr:any = this.readData();
    // 2.创建一个评论对象，并设置 评论内容属性
    let obj:any= {
      content:conStr
    };
    // 3.1自动生成 主键值（id值）{content:'讨厌'}
    let newId = arr.length > 0 ? arr[arr.length-1][this.primarykey] + 1 :1;
    // 3.2 将id值通过 中括号访问法 添加到对象 {content:'讨厌',id:1}
    obj[this.primarykey] = newId;
    // 4.将添加了 主键值的 对象 追加到数组
    arr.push(obj);
    // 5.将数组保存到localstroage
    this.saveData(arr);
    // 6.返回id
    return newId;
  }
    // 4.删除数据
    removeDataById(id:string | number) :boolean {
      // 读取本地数据
      let arr = this.readData();
      let index = arr.findIndex((ele:any) => {
        return ele[this.primarykey] == id;
      });
      //如果下标大于-1.则删除数组中该下标元素对象，并返回true
      if(index>-1){
        arr.splice(index,1);
        //保存到本地
        this.saveData(arr);
        return true;
      }
      return false;
    
  }
}