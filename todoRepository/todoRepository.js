const pool =require('../dbConn')

class RepoFile{
    async getAllTask()  
    {return await pool.query('select * from public.tasklist')}

    async createtask(task,done)
    {return await pool.query('insert into public.tasklist (task,done) values ($1,$2)',[task,done])}

    async updateTask(task,done,id)
    {return await pool.query('update public.tasklist set task =$1, done= $2 where id = $3',[task,done,id])}

    async deleteTask(id)
    {return await pool.query('delete from public.tasklist where id = $1',[id])}

    async getResult()
    {return await pool.query('SELECT count(*) as Total,count(done) filter (where done=true) as done,count(done) filter (where done=false) as pending FROM public.tasklist')}

}

module.exports = RepoFile;
