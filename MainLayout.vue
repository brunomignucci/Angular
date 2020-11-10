<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
    
      <q-list>
        <q-item>
          
        </q-item>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
    
      <div class="q-pa-md bg-grey-10 text-white">
        <q-badge transparent align="middle" color="orange">
     Selector de Temperatura
    </q-badge>
    <q-badge transparent align="middle" color="orange">
     --------------------------------------------------
    </q-badge>
    <q-badge transparent align="middle" color="orange">
     Monitor de Temperatura
    </q-badge>
    <div class="row">
      
      
     
        <q-circular-progress
          show-value
          :value="zeroStep"
          :min="0"
          :max="600"
          size="90px"
          :thickness="0.2"
          color="orange"
          center-color="grey-8"
          track-color="transparent"
          class="q-ma-md"
        />
     
          <q-circular-progress
          show-value
          :value="0"
          :min="0"
          :max="600"
          size="160px"
          :thickness="0.2"
          color="orange"
          center-color="grey-8"
          track-color="transparent"
          class="q-ma-md"
        />
        <q-circular-progress
          show-value
          :value="referencia"
          :min="0"
          :max="600"
          size="90px"
          :thickness="0.2"
          color="orange"
          center-color="grey-8"
          track-color="transparent"
          class="q-ma-md"
        />
      
        <q-slider
          v-model="zeroStep"
          :min="0.0"
          :max="600.0"
          :step="1.0"
          color="red"
          @input= periodica();
          @change = actualizar();
        />
      
      
        

      
     </div> 
       <div class="row">
            <div class="col">
           <q-linear-progress size="20px" reverse :value="progress1" color="secondary" class="q-mt-md" />
          <q-btn disable>              CARENCIA DE CALOR              </q-btn>
          </div>
         <div class="col">
          <q-linear-progress size="20px" :value="progress" color="warning" class="q-mt-md" />
          <q-btn  @click="periodica()" disable>               EXCESO DE CALOR               </q-btn>
          </div>
        </div> 
            </div> 
      

     
     
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'


const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink},
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      progress: 0.6,
      progress1: 0.1,
      zeroStep: 0.1,
      referencia: 300,
    }
  },
  methods:{
    periodica()
    {
      //si la temperatura actual es menor a la deseada falta calor
      if(this.zeroStep>this.referencia) 
      {

        this.progress1= (this.zeroStep-this.referencia)/this.referencia;
        this.progress=0;
      }
      else //esta pasado de calor
      {
        this.progress1=0;
        this.progress= (this.referencia-this.zeroStep)/this.referencia;
      }
    },
    actualizar()
    {
      
        this.referencia= parseInt(Math.random()*600);
    }
}
}
</script>
