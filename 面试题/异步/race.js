const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('1')
    },1000)
  })
  const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject('2')
    },500)
  })
  Promise.race([p1, p2])
  .then(
      (val)=>{
          console.log(val)
      },
      (res) => {
          console.log(res) // 2
      }
  )