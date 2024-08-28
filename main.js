function switchLanguage() {
    const isChecked = document.getElementById('flexSwitchCheckDefault').checked;

    // Conteúdos em português
    const ptContent = {
        navbarBrand: "Meu Portfólio",
        sobreLink: "Sobre Mim",
        tecnologiasLink: "Tecnologias",
        projetosLink: "Projetos",
        contatoLink: "Contato",
        titulo: "Bem-vindo ao Meu Portfólio",
        descricao: "Desenvolvedor Full Stack apaixonado por criar soluções incríveis.",
        sobreTitulo: "Sobre Mim",
        sobreTexto1: "Olá! Meu nome é Mabiel Muller. Sou estudante de Análise e Desenvolvimento de Sistemas pela PUCRS, nascido e criado em Igrejinha-RS, com um sonho claro: transformar ideias em soluções tecnológicas que impactem positivamente a vida das pessoas. Minha paixão pela tecnologia vai além da curiosidade, é o motor que me leva a buscar, a cada dia, maneiras de aprimorar minhas habilidades e ampliar meu conhecimento.",
        sobreTexto2: "Desde o momento em que comecei a explorar o mundo do desenvolvimento, percebi que criar soluções digitais é como dar vida a ideias. Cada linha de código é uma peça fundamental em um quebra-cabeça que, quando completo, traz à tona a realização de um projeto que antes só existia na imaginação.",
        curriculoTexto: "Baixar currículo",
        tecnologiasTitulo: "Tecnologias",
        frontendTitulo: "Front-end",
        backendTitulo: "Back-end",
        devopsTitulo: "Banco de Dados/DevOps",
        projetosTitulo: "Projetos",
        projeto1Titulo: "Ecomerce",
        projeto1Descricao: "Landing page de e-commerce desenvolvida com HTML, CSS e Bootstrap, focada em design responsivo e experiência de usuário otimizada.",
        projeto2Titulo: "Cafeteria",
        projeto2Descricao: "Landing page de cafeteria criada com HTML, CSS, Bootstrap e JavaScript, destacando interatividade e design elegante.",
        projeto3Titulo: "Cardápio Online",
        projeto3Descricao: "Template de cardápio online já utilizado por restaurantes reais para modernizar suas operações e entregar uma melhor experiência para o usuário.",
        projeto4Titulo: "Projeto 4",
        projeto4Descricao: "Descrição breve do Projeto 4.",
        projeto5Titulo: "Projeto 5",
        projeto5Descricao: "Descrição breve do Projeto 5.",
        projeto6Titulo: "Projeto 6",
        projeto6Descricao: "Descrição breve do Projeto 6.",
        contatoTitulo: "Entre em contato",
        contatoInfo: "Meu contato:",
        contatoCelular: "Celular: +55 51989255123",
        contatoEmail: "E-mail: mabielmuller9@gmail.com",
        whatsappTexto: "Fale comigo pelo WhatsApp!",
        placeholderNome: "Seu nome...",
        placeholderEmail: "Seu e-mail...",
        placeholderMensagem: "Digite sua mensagem...",
        botaoEnviar: "Enviar para meu e-mail",
        footerTexto: "&copy; 2023 Meu Portfólio",
          githubTexto: "Github do projeto",
        verOnlineTexto: "Ver Online"
    };

    // Conteúdos em inglês
    const enContent = {
        navbarBrand: "My Portfolio",
            sobreLink: "About Me",
            tecnologiasLink: "Technologies",
            projetosLink: "Projects",
            contatoLink: "Contact",
            titulo: "Welcome to My Portfolio",
            descricao: "Full Stack Developer passionate about creating amazing solutions.",
            sobreTitulo: "About Me",
            sobreTexto1: "Hello! My name is Mabiel Muller. I am a student of Analysis and Development of Systems at PUCRS, born and raised in Igrejinha-RS, with a clear dream: to transform ideas into technological solutions that positively impact people's lives. My passion for technology goes beyond curiosity; it is the engine that drives me to seek ways to improve my skills and expand my knowledge every day.",
            sobreTexto2: "From the moment I started exploring the world of development, I realized that creating digital solutions is like bringing ideas to life. Every line of code is a fundamental piece in a puzzle that, when complete, reveals the realization of a project that once only existed in imagination.",
            curriculoTexto: "Download resume",
            tecnologiasTitulo: "Technologies",
            frontendTitulo: "Front-end",
            backendTitulo: "Back-end",
            devopsTitulo: "Database/DevOps",
            projetosTitulo: "Projects",
            projeto1Titulo: "Ecomerce",
            projeto1Descricao: "E-commerce landing page developed with HTML, CSS, and Bootstrap, focused on responsive design and optimized user experience.",
            projeto2Titulo: "Cafeteria",
            projeto2Descricao: "Cafeteria landing page created with HTML, CSS, Bootstrap, and JavaScript, highlighting interactivity and elegant design.",
            projeto3Titulo: "Online Menu",
            projeto3Descricao: "Online menu template already used by real restaurants to modernize their operations and deliver a better user experience.",
            projeto4Titulo: "Project 4",
            projeto4Descricao: "Brief description of Project 4.",
            projeto5Titulo: "Project 5",
            projeto5Descricao: "Brief description of Project 5.",
            projeto6Titulo: "Project 6",
            projeto6Descricao: "Brief description of Project 6.",
            contatoTitulo: "Contact",
            contatoInfo: "My contact:",
            contatoCelular: "Phone: +55 51989255123",
            contatoEmail: "Email: mabielmuller9@gmail.com",
            whatsappTexto: "Talk to me on WhatsApp!",
            placeholderNome: "Your name...",
            placeholderEmail: "Your email...",
            placeholderMensagem: "Enter your message...",
            botaoEnviar: "Send to my email",
            footerTexto: "&copy; 2023 My Portfolio",
            githubTexto: "Github of the project",
            verOnlineTexto: "View Online"
    };

    // Altera o conteúdo da página baseado no estado do switch
    const content = isChecked ? enContent : ptContent;

    
    
    document.getElementById('navbarBrand').innerText = content.navbarBrand;
    document.getElementById('sobreLink').innerText = content.sobreLink;
    document.getElementById('tecnologiasLink').innerText = content.tecnologiasLink;
    document.getElementById('projetosLink').innerText = content.projetosLink;
    document.getElementById('contatoLink').innerText = content.contatoLink;
    document.getElementById('titulo').innerText = content.titulo;
    document.getElementById('descricao').innerText = content.descricao;
    document.getElementById('sobre-titulo').innerText = content.sobreTitulo;
    document.getElementById('sobre-texto1').innerText = content.sobreTexto1;
    document.getElementById('sobre-texto2').innerText = content.sobreTexto2;
    document.querySelector('.btn-primary').innerText = content.curriculoTexto;
    document.getElementById('tecnologias-titulo').innerText = content.tecnologiasTitulo;
    document.getElementById('frontend-titulo').innerText = content.frontendTitulo;
    document.getElementById('backend-titulo').innerText = content.backendTitulo;
    document.getElementById('devops-titulo').innerText = content.devopsTitulo;
    document.getElementById('projetos-titulo').innerText = content.projetosTitulo;
    document.getElementById('projeto1-titulo').innerText = content.projeto1Titulo;
    document.getElementById('projeto1-descricao').innerText = content.projeto1Descricao;
    document.getElementById('projeto2-titulo').innerText = content.projeto2Titulo;
    document.getElementById('projeto2-descricao').innerText = content.projeto2Descricao;
    document.getElementById('projeto3-titulo').innerText = content.projeto3Titulo;
    document.getElementById('projeto3-descricao').innerText = content.projeto3Descricao;
    document.getElementById('projeto4-titulo').innerText = content.projeto4Titulo;
    document.getElementById('projeto4-descricao').innerText = content.projeto4Descricao;
    document.getElementById('projeto5-titulo').innerText = content.projeto5Titulo;
    document.getElementById('projeto5-descricao').innerText = content.projeto5Descricao;
    document.getElementById('projeto6-titulo').innerText = content.projeto6Titulo;
    document.getElementById('projeto6-descricao').innerText = content.projeto6Descricao;
    document.getElementById('contato-titulo').innerText = content.contatoTitulo;
    document.getElementById('contato-info').innerText = content.contatoInfo;
    document.getElementById('contato-celular').innerText = content.contatoCelular;
    document.getElementById('contato-email').innerText = content.contatoEmail;
    document.getElementById('whatsapp-link').innerText = content.whatsappTexto;
    document.getElementById('input-nome').placeholder = content.placeholderNome;
    document.getElementById('input-email').placeholder = content.placeholderEmail;
    document.getElementById('input-mensagem').placeholder = content.placeholderMensagem;
    document.getElementById('botao-enviar').value = content.botaoEnviar;
    document.getElementById('footer-texto').innerHTML = content.footerTexto;

    const githubLinks = document.querySelectorAll('.github-link .link-text');
    const onlineLinks = document.querySelectorAll('.online-link .link-text');

    githubLinks.forEach(link => {
        link.innerText = content.githubTexto;
    });

    onlineLinks.forEach(link => {
        link.innerText = content.verOnlineTexto;
    });

}

