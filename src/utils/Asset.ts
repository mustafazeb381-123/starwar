/* eslint-disable global-require */
class AppAssets {
    readonly images = {
        img : require('../assets/images/img.png')
    } as const;

    
}

const Assets = new AppAssets();

export default Assets;
