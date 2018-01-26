// Those imports are handled by url-loader
import '../dist/wasm/libsvm.wasm';
import '../dist/asm/libsvm.js';


export async function init() {
    try {
        var SVM = await import('../wasm');
        return SVM;
    } catch (e) {
        console.warn('wasm failed, trying asm'); // eslint-disable-line no-console
        var SVM  = await import('../asm');
        return SVM;
    }
}
