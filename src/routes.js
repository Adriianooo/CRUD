const router = require("express").Router();
const Person = require("../src/models/person");


router.post('/addMember', async (req, res) => { //adicionar um cliente no banco de dados
    try {
        const user = await Person.create(req.body);
        console.log(req.body);
        return res.status(200).send(user);
    } catch (error)  {
        return res.status(400).json({message: "Cadastro inválido."});
    }
});

router.get('/allMembers', async (req, res) => { //pegar todos os clientes do banco de dados
    try {
        const members = await Person.find();
        return res.status(200).json(members);
    } catch (error) {
        return res.status(400).json({message: "O banco está vazio !"});
    }
});

router.get('/getMember/:cpf', async (req, res) => { //Pegar um membro específico no banco de dados
    try {
        let { cpf } = req.params;
        let member = await Person.findOne({cpf : cpf}).exec();
        if(!member) return res.status(400).json({message: "Operação inválida."})
        return res.status(200).json(member);
    } catch (error) {
        return res.status(500).json({error: error });
    }
});

router.patch('/attMember/:cpf', async (req, res) => { //Atualizar um usuário
    try {
        let { cpf } = req.params;
        let member = await Person.updateOne({cpf:cpf}, req.body);
        if(member.matchedCount === 0 ) {
            return res.status(400).json({message: "Cadastro inválido! "});
        }
        return res.status(200).json(req.body);
    } catch (error) {
        return res.status(400).json({message: "CPF não encontrado"})
    }
});


router.delete('/deleteMember/:cpf', async (req, res) => {//Deletar um usuário
    let { cpf } = req.params;
    let member = await Person.findOne({cpf : cpf}).exec();
    if(!member) return res.status(400).json({message: "O usuário não existe !"});
    try {
        await Person.deleteOne({cpf: cpf});
        return res.status(200).json({message: "Cliente deletado com sucesso !"});
        
    } catch (error) {
        return res.status(400).json({error: "Operação inválida! "});
    }
});








module.exports = router;