function onArrowsMounted(splide, index, width) {
  const end  = splide.Components.Controller.getEnd() + 1;
  const rate = Math.min( ( index + 1 ) / end, 1 );
  width.value = `${String( 100 * rate )}%`;
}

export default Object.freeze({
    onArrowsMounted
});