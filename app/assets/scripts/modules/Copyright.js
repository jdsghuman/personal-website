class Copyright {
  constructor() {
    this.year();
  }
  // Dynamic Copyright Year in Footer
  year(){
    var dt = new Date().getFullYear();
    document.querySelector('#copyyear').innerHTML = dt;
  };
}

export default Copyright;
