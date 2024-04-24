import $ from 'jquery'

export default {
    setH1(){
        // document.body.insertAdjacentHTML('beforebegin','<h1>您好webpack</h1>')
        $('body').append('<h1>您好webpack</h1>')
    }
}