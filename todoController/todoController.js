const RepoFile = require('../todoRepository/todoRepository')
 const todorepo = new RepoFile()

class ControlFile{
    async ControlAllTask(request, response) {
        const todorepo = new RepoFile()
        let res = await todorepo.getAllTask();
        console.log(res);
        response.json({info : res.rows})}

    async Controlcreatetask(req, response) {
        const todorepo = new RepoFile()
        let result = await todorepo.createtask(req.body.id ,req.body.task, req.body.done);
        console.log(req.body.id,req.body.task)
        response.json({ "info":"Task Created"})
    }

    async ControlupdateTask(req, response) {
        let result = await todorepo.updateTask(req.body.task,req.body.done,req.body.id);
        response.json({ "info":"Task Updated" })
        console.log(req.body.id,req.body.task)
    }

    async ControldeleteTask(req, response) {
        console.log(req.body.id)
        let ressult = await todorepo.deleteTask(req.body.id);
        response.json({ "info":"Task Deleted"})
    }

    async ControlgetResult(req, response) {
            let ressult = await todorepo.getResult();
            response.json({ todo : ressult.rows})
            console.log(req.body.id)
    }

}


module.exports = ControlFile;
