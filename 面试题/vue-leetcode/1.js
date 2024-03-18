// patches 的过程，我们有哪些改变要收集呢？
[{type:patchFlag}]

const PatchFlags = {
    CLASS:1,
    TEXT:2,
    STYLE:4
}

if(patchFlag & PatchFlags.CLASS){
    if(oldProps.class !== newProps.class){
        hotPatchProp(el,'class',null,newProps.class,isSVG)
    }
}else if(patchFlag & PatchFlags.STYLE){

}else if(shapeFlag & ShapeFlags.COMPONENT){

}else if(shapeFlag & ShapeFlags.ELEMENT){

}