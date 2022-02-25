
const vuaInstal = new Vue({
    el: '#app',
    data() {
        return {
            todo: { title: '', description: '' },
            listTodo: [],
        }
    }, created() {
        axios.get('/listtodo')
            .then(function (response) {
                // handle success
                vuaInstal.listTodo = response.data.listdata;
                console.log(response.data.listdata);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed       
            });
    },
    methods: {
        checkForm() {
            var data = new FormData();
            data.append('title', vuaInstal.todo.title);
            data.append('description', vuaInstal.todo.description);
            axios.post('/addTodo', data)
                .then(function (response) {
                    location.reload()
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})








