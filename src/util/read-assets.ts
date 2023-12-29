import fs from 'fs';

class Assets {
  constructor(){
    this.filename = 'dist/client/assets.json';
  }

  getAssetsJsonFile() {
    const theDataLines = fs.readFileSync(this.filename, "utf-8");
    return theDataLines;
  }
}

export default new Assets();