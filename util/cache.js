define([],function(){
  function setItem(key,val){
      if(window.sessionStorage){
          return window.sessionStorage.setItem(key,val);
      }else{
      }
  };
  function getItem(key){
      if(window.sessionStorage){
          return window.sessionStorage.getItem(key);
      }else{
          return '';
      }
  };

  function removeItem(key){
      if(window.sessionStorage){
          window.sessionStorage.removeItem(key);
      }else{
      }
  };
  function clear(){
      if(window.sessionStorage){
          window.sessionStorage.clear();
      }else{
      }
  }
  return {
      getToken:function(){
          return getItem('HI_TOKEN');
      },
      setToken:function(token){
          setItem('HI_TOKEN',token);
      },
      getAd:function(){
          return getItem('HI_AD');
      },
      setAd:function(ad){
          setItem('HI_AD',ad);
      },
      getName:function(){
          return getItem('HI_NAME');
      },
      setName:function(name){
          setItem('HI_NAME',name);
      },
      setData:function(data){
          this.setToken(data.empCode);
          this.setName(data.nameCn);
          setItem('HI_DATA',JSON.stringify(data));
      },
      getData:function(){
          var data = getItem('HI_DATA');
          if(data){
              return JSON.parse(data);
          }
      },
      logout:function(){
          clear();
      }
  }
});