export const clearNavbarEvent = () => {
  document.removeEventListener("scroll", () => {});
  document.getElementById('navbar').style.top = "0px";
  console.dir(document.getElementById('navbar'))
}
export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
});
