function fn(t1, t2) {
  var a = new Date(t1);
  console.log("lastCheckpointTime: ", a);
  var b = new Date(t2);
  console.log("savePoint:          ", b);
}

fn(1720191353747, 1720170407429);
