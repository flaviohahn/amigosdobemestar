document.getElementById('imcForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var nome = document.getElementById('nome').value;
  var peso = document.getElementById('peso').value;
  var altura = document.getElementById('altura').value;

  altura = altura / 100; // Convertendo a altura para metros

  var imc = (peso / (altura * altura)).toFixed(2);
  var resultado = `Olá, ${nome}! Seu IMC é ${imc}. `;

  // Mensagens personalizadas
  if(imc < 18.5) {
      resultado += "Estamos juntos nesta jornada! Com alimentação balanceada e atividade física, você pode alcançar um peso saudável 🌟.";
  } else if(imc >= 18.5 && imc <= 24.9) {
      resultado += "Você está com um peso ideal, continue cuidando de sua saúde e bem-estar ����.";
  } else if(imc >= 25 && imc <= 29.9) {
      resultado += "Pequenas mudanças podem fazer uma grande diferença. Vamos trabalhar para melhorar esses números? ⚖️";
  } else {
      resultado += "Momentos de mudança são uma oportunidade para crescimento e bem-estar. Conte conosco para apoiar você 💪!";
  }

  // Adicione resultados e vídeos recomendados à página
  document.getElementById('imcResult').innerHTML = resultado;

  // Exemplo de inserção de vídeos de forma dinâmica
  const videoList = document.getElementById('videoList');
  videoList.innerHTML = ''; // Limpa a lista de vídeos
  const videos = [
      {title: "Nutrição Inteligente", id: "lXqemxb7NEA"},
      {title: "Exercícios em casa", id: "videoseries?list=PLf8OL6li9lj8WPzuyxEh_RTFH0GSKjJ7_"},
      {title: "Meditação para iniciantes", id: "vXZ5l7G6T2I"}
  ];
  videos.forEach(video => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${video.id}`;
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      videoList.appendChild(iframe);
      
      // Cria um título para o vídeo
      const title = document.createElement('h3');
      title.innerText = video.title;
      videoList.appendChild(title);
  });
});
