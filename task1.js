class TestDemo {

    static stringLength = (string) =>{
      const s = string.split("");
      let i = 0;
    //   while(i < s.length) {
    //       i++;
    //   }
    //   return i;
      if (s.length < 1 || s.length > 10) {
        throw new Error("The input character is out of the box");
      } else {
        return s.length;
      }
    }
    
    static reverseString = (str)=>{
    const reversed = str.split("").reverse().join("");
    return reversed;
    }
}

module.exports = TestDemo;