
var map;
var panel;
var initialize;
var calculate;
var direction;

initialize = function () {
  var latLng = new google.maps.LatLng(50.2892587, 2.7328427); // Correspond au coordonnées de Arras
  var myOptions = {
    zoom      : 9, // Zoom par défaut
    center    : new google.maps.LatLng(50.2892587, 2.7328427), // Coordonnées de départ de la carte de type latLng 
    mapTypeId : google.maps.MapTypeId.ROADMAP, // Type de carte, différentes valeurs possible HYBRID, ROADMAP, SATELLITE, TERRAIN
    maxZoom   : 14
  };
  
  map      = new google.maps.Map(document.getElementById('map'), myOptions);
  panel    = document.getElementById('panel');
  
  var marker = new google.maps.Marker({
    map      : map,
    title    : "Carte"
  });
  
  var contentMarker = [
  ].join('');

  var infoWindow = new google.maps.InfoWindow({
    content  : contentMarker,
    position : latLng
  });
  
  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map,marker);
  });
  
  google.maps.event.addListener(infoWindow, 'domready', function(){ // infoWindow est biensûr notre info-bulle
    jQuery("#tabs").tabs();
  });
  
  
  direction = new google.maps.DirectionsRenderer({
    map   : map,
    panel : panel // Dom element pour afficher les instructions d'itinéraire
  });

};


calculate = function(){
    var listeVillages = new Array(
                    "Affringues",
                    "Agnez-lès-Duisans",
                    "Agnieres",
                    "Agny",
                    "Aire-sur-la-Lys",
                    "Airon-Notre-Dame",
                    "Airon-Saint-Vaast",
                    "Aix-Noulette",
                    "Aix-en-Ergny",
                    "Aix-en-Issart",
                    "Alembon",
                    "Alette",
                    "Alincthun",
                    "Allouagne",
                    "Alquines",
                    "Ambleteuse",
                    "Ambricourt",
                    "Ambrines",
                    "Ames",
                    "Amettes",
                    "Amplier",
                    "Andres",
                    "Angres",
                    "Annay",
                    "Annequin",
                    "Annezin",
                    "Anvin",
                    "Anzin-Saint-Aubin",
                    "Ardres",
                    "Arleux-en-Gohelle",
                    "Arques",
                    "Arras",
                    //--------------
                    "Bailleul-Sir-Berthoult",
                    "Bailleul-aux-Cornailles",
                    "Bailleul-lès-Pernes",
                    "Bailleulmont",
                    "Bailleulval",
                    "Baincthun",
                    "Bainghen",
                    "Bajus",
                    "Balinghem",
                    "Bancourt",
                    "Bapaume",
                    "Baralle",
                    "Barastre",
                    "Barlin",
                    "Barly",
                    "Basseux",
                    "Bavincourt",
                    "Bayenghem-lès-Éperlecques",
                    "Bayenghem-lès-Seninghem",
                    "Bazinghen",
                    "Béalencourt",
                    "Beaudricourt",             
                    "Beaufort-Blavincourt",
                    "Beaulencourt",
                    "Beaumerie-Saint-Martin",
                    "Beaumetz-lès-Aire",
                    "Beaumetz-lès-Cambrai",
                    "Beaumetz-lès-Loges",
                    "Beaurains",
                    "Beaurainville",
                    "Beauvoir-Wavans",
                    "Beauvois",
                    "Bécourt",
                    "Béhagnies",
                    "Belle-et-Houllefort",
                    "Bellebrune",
                    "Bellonne",
                    "Bénifontaine",
                    "Berck",
                    "Bergueneuse",
                    "Berlencourt-le-Cauroy",
                    "Berles-Monchel",
                    "Berles-au-Bois",
                    "Bermicourt",
                    "Berneville",
                    "Bernieulles",
                    "Bertincourt",
                    "Béthonsart",
                    "Béthune",
                    "Beugin",
                    //--------------
                    "Caffiers",
                    "Cagnicourt",
                    "Calais",
                    "Calonne-Ricouart",
                    "Calonne-sur-la-Lys",
                    "Camblain-Châtelain",
                    "Camblain-l'Abbé",
                    "Cambligneul",
                    //--------------
                    "Dainville",
                    "Duisans",
                    //--------------
                    "Écurie",
                    "Étrun",
                    //--------------
                    "Fampoux"
                );
    var IndiceVillage=Math.floor(Math.random() * listeVillages.length);
    origin      = document.getElementById('origin').innerHTML = listeVillages[IndiceVillage];; // Le point départ
    destination = document.getElementById('destination').value; // Le point d'arrivé
    alert(origin)
    if(origin && destination){
        var request = {
            origin      : origin,
            destination : destination,
            travelMode  : google.maps.DirectionsTravelMode.DRIVING // Mode de conduite
        }
        var directionsService = new google.maps.DirectionsService(); // Service de calcul d'itinéraire
        directionsService.route(request, function(response, status){ // Envoie de la requête pour calculer le parcours
            if(status == google.maps.DirectionsStatus.OK){
                direction.setDirections(response); // Trace l'itinéraire sur la carte et les différentes étapes du parcours
            }
        });
    }
};

initialize();
