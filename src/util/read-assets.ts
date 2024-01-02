import fs from 'fs';

class Assets {
  readonly filename: string = 'dist/client/assets.json';

  public getAssetsJsonFile() {
    return fs.readFileSync(this.filename, "utf-8");
  }
}

export default new Assets();