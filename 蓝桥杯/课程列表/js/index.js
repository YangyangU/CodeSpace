
let pageNum = 1; // 当前页码，默认页码1
let maxPage; // 最大页数
let data = []
let pageData //每页数据

// TODO：待补充代码

//显示页码
function showPageNum(pageNum, maxPage) {
  let pagination = document.getElementById("pagination");
  pagination.innerHTML = `第 ${pageNum} 页 / 共 ${maxPage} 页`;
}
function renderList(pageData) {
  document.querySelector('#list').innerHTML = pageData.map(item => {
    return `
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${item.name}</h5>
          <small>${(item.price / 100).toFixed(2)}</small>
        </div>
        <p class="mb-1">
          ${item.description}
        </p>
      </a>
    </div>`
  })
}

// fetch("./js/carlist.json")
// .then((res)=>res.json())
// .then((data)=>console.log(data))

//拿到数据
async function getCourseList() {
  let res = await axios.get("./js/carlist.json")
  data = res.data
  // console.log(data);
  maxPage = Math.floor(data.length / 5) + 1;
  //显示当前页码
  showPageNum(pageNum, maxPage)
  //拿到当前页数据
  pageData = data.slice((pageNum - 1) * 5, pageNum * 5)
  // console.log(pageData);
  //渲染当前页数据
  renderList(pageData)
}
getCourseList();


// 点击上一页
let prev = document.getElementById("prev");
prev.onclick = function () {
  // TODO：待补充代码
  next.classList.remove("disabled")
  pageNum--;
  if(pageNum <= 1){
    this.classList.add("disabled")
    pageNum = 1
  }
  // console.log(pageNum);
  //显示当前页码
  showPageNum(pageNum, maxPage)
  //拿到当前页数据
  pageData = data.slice((pageNum - 1) * 5, pageNum * 5)
  // console.log(pageData);
  //渲染当前页数据
  renderList(pageData)
};
// 点击下一页
let next = document.getElementById("next");
next.onclick = function () {
  // TODO：待补充代码
  prev.classList.remove("disabled")
  pageNum++;
  if(pageNum > maxPage){
    this.classList.add("disabled")
    pageNum = maxPage
  }
  // console.log(pageNum);
  //显示当前页码
  showPageNum(pageNum, maxPage)
  //拿到当前页数据
  pageData = data.slice((pageNum - 1) * 5, pageNum * 5)
  // console.log(pageData);
  //渲染当前页数据
  renderList(pageData)
};
