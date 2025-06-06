const base = {
    get() {
        return {
            url : "http://localhost:8080/yimiaoyuyueshanxi/",
            name: "yimiaoyuyueshanxi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yimiaoyuyueshanxi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "疫苗预约小程序"
        } 
    }
}
export default base
