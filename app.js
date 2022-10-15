// const place=+prompt('now', "10")
// console.log(typeof place);
// console.log(place+4);
// const color = []
// color[0]=prompt('color  1', '')
// color[1]=prompt('color  2', '')
// color[2]=prompt('color  3', '')
// // console.log(color);
// Vazifa 1
//  const numberOfSeries=[]
//  const seriesDb = {
//    count:numberOfSeries,
//    series:{},
//    actors:{},
//    genres:[],
//    private:false
//  };
//  numberOfSeries[0] = prompt ('how many movies you have watched')
//  numberOfSeries[1] = prompt ('rate it');
//  console.log(seriesDb);

/// vazifa1 javobi..

//const numberOfSeries=+prompt('how many movies you have watched?','');
const seriesDb={
  // count:numberOfSeries,
  series:{},
  actors:{},
  genres:[],
  private:false,
};
const a=prompt('last vide you have watched?'),
b=prompt('rate it'),
c=prompt('last vide you have watched?'),
d=prompt('rate it');
seriesDb.series[a]=b;
seriesDb.series[c]=d;
console.log(seriesDb);
