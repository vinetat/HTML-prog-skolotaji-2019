let masivs=[];
function iegutPecIndeksa(i){
    return masivs(i);
}
function mainitPecIndeksa(i, vertiba) {
    masivs[i] = vertiba;
  }
function dzestPecIndeksa(i) {
    masivs = masivs.splice(i, 1);
  }
function print(){
  console.log(masivs);
  }
function atrastVertibasIndeksu(vertiba) {
    for (let i = 0; i < masivs.length; i++) {
      if ( vertiba === masivs[i]) {
        return i;
      }
    }
    return -1;
  }