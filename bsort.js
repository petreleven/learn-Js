let myrandomlist = [50, 20, 1, 0, 12, 3, 2, 1000]


for (let num = 0; num < myrandomlist.length; num += 1) {
  //grab the left and right
  let left = myrandomlist[num]
  let right = myrandomlist[num + 1]
  if (left > right) {
    //Todo: swap
    myrandomlist[num] = right
    myrandomlist[num + 1] = left
  }

}

console.log(myrandomlist)

