new Vue ({
    el: '#tasklist',
    data: {
        title: 'Lista de tareas',
        tasks: [
            {name: 'Tarea de programación para internet'},
            {name: 'Leer un libro'},
            {name: 'Llorar un rato'},
        ]
    },
    methods: {
        newItem: function() {
            if(!this.tasks.name){
                return
            }
            this.tasks.push({
                name: this.tasks.name,
                del: ''
            });
            this.tasks.name = '';
        },
        delItem: function(task) {
            this.tasks.splice(this.tasks.indexOf(task), 1)
        }
    }
})