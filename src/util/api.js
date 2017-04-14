module.exports = {
	getDataList: function(cmd, param){
		var vm = this
		vm.$store.dispatch('show_loading')
	    return new Promise(function(resolve, reject){
	      $.ajax({
	        url: API + GET_SESSKEY,
	        type: 'GET',
	        success: function(d){
	          if(d && d.state == 0){
	            // window.localStorage.setItem("sesskey", d.aaData[0].sesskey)
	            window.localStorage.setItem("sesskey", '229cd120-f265-11e6-8f40-b326d8eca284')
	            if(!param.sesskey){
		          param.sesskey = '229cd120-f265-11e6-8f40-b326d8eca284'
		        }        
		        $.ajax({
		          url: API + cmd,
		          type: 'POST',
		          data: param,
		          success: function(res){
		            if(res && res.state === 0){              
		              resolve(res)   
		              vm.$store.dispatch('hide_loading')
		            }else if(res && res.state === -20002){              
		              window.localStorage.removeItem("sesskey")  
		              vm.$store.dispatch('hide_loading')         
		            }
		            vm.$store.dispatch('hide_loading') 
		          },
		          error: function(res){            
		            reject(res)   
		            vm.$store.dispatch('hide_loading')
		          }
		        })
	          }
	        },
	        error: function(d){
	          reject(d)
	          vm.$store.dispatch('hide_loading')
	        }
	      })     
	    })
  	},
  	getData: function(key, param) {
  		$.ajax({
            url: API + GET_SESSKEY,
            type: 'GET',
            success: function(d){
              if(d && d.state == 0){
                // window.localStorage.setItem("sesskey", d.aaData[0].sesskey)
                window.localStorage.setItem("sesskey", '229cd120-f265-11e6-8f40-b326d8eca284')
                if(!param.sesskey){
                  param.sesskey = '229cd120-f265-11e6-8f40-b326d8eca284'
                }        
                $.ajax({
                  url: API + key,
                  type: 'POST',
                  data: param,
                  success: function(res){
                    if(res && res.state === 0 && res.aaData && res.aaData.length > 0){              
                        return res.aaData;
                    }else{
                        return;
                    }
                  },
                  error: function(res){            
                    console.log('oh no', error);
                    return;
                  }
                })
              }
            },
            error: function(d){
                console.log('oh no', error);
                return;
            }
        })
  	},
  	ajaxPost: function(cmd, param, fn, flag) {
  		var vm = this, flag = flag === undefined ? true : flag
  		vm.$store.dispatch('show_loading')
  		$.ajax({
  			url: cmd,
  			type: 'POST',
  			data: param,
  			async: flag,
  			success: function(d) {
  				fn(d)
  				vm.$store.dispatch('hide_loading')
  			},
  			error: function(error){
                console.log('oh no', error);
                vm.$store.dispatch('hide_loading')
                return;
            }
  		})
  	}
}