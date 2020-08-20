export default function (img, width = '600') {
  console.log('in the function: ', img);
  const optimizeStr = `w_${width}/q_auto/f_auto/`;
  if (img.includes('upload/')) {
    console.log(
      'recieved',
      img.replace('upload/sites/', `upload/sites/${optimizeStr}`)
    );
    return img.replace('upload/', `upload/${optimizeStr}`);
  }
  console.log(
    'recieved outer',
    img.replace('gonation/', `gonation/${optimizeStr}`)
  );
  return img.replace('gonation/', `gonation/${optimizeStr}`);
}
