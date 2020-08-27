export default function (str) {
  var time = str.split(':');
  var amORpm = ' PM';

  if (time[0] < 12) amORpm = ' AM';

  if (time[0] > 12) time[0] -= 12;
  else if (time[0] == 0) time[0] = 12;

  return time[0] + ':' + time[1] + amORpm;
}
