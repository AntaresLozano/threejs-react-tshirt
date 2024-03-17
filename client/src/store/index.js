import { proxy } from 'valtio';

const state = proxy({
    intro:true,
    color:'#EFBD48',
    idLogoTexture:true,
    idFullTexture:false,
    logoDecal:'./threejs.png',
    fullDecal:'./threejs.png',

});

export default state;