import fs from 'fs';

class Assets {
  readonly filename: string = 'dist/client/assets.json';

  public getAssetsJsonFile() {
    return fs.readFileSync(this.filename, "utf-8");
  }

  public getJSAssets() {
    const assetsJsonFile = this.getAssetsJsonFile();
    const assetsJson = JSON.parse(assetsJsonFile);
    const { 
      manifest: { js: manifestJs }, 
      main: { js: mainJs }, 
      vendor_react: { js: vendorReactJs }, 
    } = assetsJson;

    return { manifestJs, mainJs, vendorReactJs }
  }
}

export default new Assets();