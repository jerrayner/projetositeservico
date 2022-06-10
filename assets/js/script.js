
      function inicializar() {
        const coordenadas = {lat: -16.745983, lng: -49.382929};

        const mapa = new google.maps.Map(document.getElementById('mapa'), {
          zoom: 15,
          center: coordenadas 
        });

        const marker = new google.maps.Marker({
          position: coordenadas,
          map: mapa,
          title: 'Meu marcador'
        });
      }