
window.COLORYMARMOL_CONFIG = {
  brand: "Cocinas ColoryMarmol",
  shortBrand: "ColoryMarmol",
  domain: "https://colorymarmol.com",
  whatsapp: "525500000000",
  phone: "55 0000 0000",
  email: "contacto@colorymarmol.com",
  location: "CDMX y Estado de México",
  hours: "Lun–Sáb 9:00–18:00",
  social: {
    instagram: "#",
    facebook: "#"
  }
};

window.COLORYMARMOL_DEFAULT_PRODUCTS = [
  {
    id:"cocina-moderna-ebano",
    category:"cocinas",
    name:"Cocina Moderna Ébano",
    material:"Cuarzo + madera",
    description:"Cocina de estilo moderno con gabinetes oscuros, detalles en madera y cubierta de cuarzo.",
    image:"productos/images/cocina-moderna-negra-madera.jpg",
    featured:true,
    features:["Fabricación a medida","Cubierta de cuarzo","Herrajes de cierre suave","Iluminación LED"]
  },
  {
    id:"cocina-blanca-isla",
    category:"cocinas",
    name:"Cocina Blanca con Isla",
    material:"Cuarzo blanco",
    description:"Diseño luminoso con isla central, cubierta clara y almacenamiento amplio.",
    image:"productos/images/cocina-blanca-isla.jpg",
    featured:true,
    features:["Isla central","Fabricación personalizada","Almacenamiento optimizado","Cubierta clara"]
  },
  {
    id:"cocina-minimalista",
    category:"cocinas",
    name:"Cocina Minimalista",
    material:"MDF + piedra",
    description:"Diseño limpio, frentes continuos y herrajes discretos.",
    image:"productos/images/cocina-minimalista.jpg",
    featured:false,
    features:["Frentes continuos","Acabado mate","Cierre suave","Diseño minimalista"]
  },
  {
    id:"vestidor-premium",
    category:"closets",
    name:"Vestidor Premium",
    material:"Madera nogal",
    description:"Vestidor abierto con organización personalizada y acabados premium.",
    image:"productos/images/vestidor-premium.jpg",
    featured:true,
    features:["Iluminación LED","Cajoneras","Entrepaños","Fabricación a medida"]
  },
  {
    id:"closet-moderno",
    category:"closets",
    name:"Closet Moderno",
    material:"Melamina texturizada",
    description:"Diseño contemporáneo con cajones, entrepaños y áreas de colgado.",
    image:"productos/images/closet-moderno.jpg",
    featured:false,
    features:["Piso a techo","Organización interior","Cierre suave","Acabado texturizado"]
  },
  {
    id:"bano-moderno",
    category:"banos",
    name:"Mueble Suspendido",
    material:"Madera + cuarzo",
    description:"Mueble suspendido moderno con almacenamiento y cubierta elegante.",
    image:"productos/images/bano-mueble-suspendido.jpg",
    featured:true,
    features:["Mueble suspendido","Cubierta resistente","Almacenamiento","Diseño a medida"]
  },
  {
    id:"bano-marmol",
    category:"banos",
    name:"Baño con Encimera de Mármol",
    material:"Mármol blanco",
    description:"Mueble a medida con encimera de mármol y apariencia premium.",
    image:"productos/images/bano-encimera-marmol.jpg",
    featured:false,
    features:["Mármol natural","Mueble personalizado","Herrajes premium","Instalación profesional"]
  },
  {
    id:"marmol-carrara",
    category:"encimeras",
    name:"Mármol Carrara",
    material:"Mármol",
    description:"Veta suave y elegante para cocinas, baños, barras y cubiertas.",
    image:"productos/images/marmol-carrara.jpg",
    featured:true,
    features:["Piedra natural","Veta única","Uso residencial","Acabado premium"]
  },
  {
    id:"cuarzo-blanco",
    category:"encimeras",
    name:"Cuarzo Blanco",
    material:"Cuarzo",
    description:"Superficie uniforme, luminosa y fácil de combinar.",
    image:"productos/images/cuarzo-blanco.jpg",
    featured:false,
    features:["Fácil mantenimiento","Alta resistencia","Diseño uniforme","Múltiples aplicaciones"]
  },
  {
    id:"granito-negro",
    category:"encimeras",
    name:"Granito Negro",
    material:"Granito",
    description:"Alta resistencia y profundidad visual para cocinas y barras.",
    image:"productos/images/granito-negro.jpg",
    featured:false,
    features:["Piedra natural","Alta resistencia","Durabilidad","Uso intensivo"]
  }
];

window.ColorYMarmolStore = {
  key: "colorymarmol_products_v1",
  load(){
    try{
      const saved = JSON.parse(localStorage.getItem(this.key) || "null");
      return Array.isArray(saved) && saved.length ? saved : window.COLORYMARMOL_DEFAULT_PRODUCTS;
    }catch(e){
      return window.COLORYMARMOL_DEFAULT_PRODUCTS;
    }
  },
  save(items){
    localStorage.setItem(this.key, JSON.stringify(items));
  },
  uid(){
    return Date.now().toString(36) + Math.random().toString(36).slice(2,7);
  }
};
