/*
 * css-adapter
 * http://github.com/donghanji/css-adapter/
 *
 * Copyright (c) 2013 donghanji, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        adapter:{
            options:{
            	"replaceurl":"",
                "compile":"",
				"dpi":{
					"standard":1024,
					"broad":{
						
					},
					"narrow":{
						
					}
				},
				"others":{
					
				},
				"mins":{
					
				},
				"maxs":{
					
				},
				//"regions":[640,320],
				//"ratios":[1.5,2,3],
                "prefixs":['-webkit-','-moz-','-ms-','-o-'],
                'adapters':{
                    'attrs':['border-image','border-radius','box-shadow','background-origin','background-clip','background-size','display','box-sizing','box-pack','box-flex','transform','transform-origin','animation','transition'],
                    'vals':{
                        'display':'box'
                    }
                }
            },
			/*dist:{
				src:["samples/test6.css"],
				dest:"samples/test6.adapter.css"
			}*/
			/*dist:{
				files:{
					"samples/base.adapter.css":["samples/base.css"]
				}
			}*/
			dist:{
				files:grunt.file.expandMapping(['samples/*.css','!samples/*.adapter.css'], '', {
                    rename: function(base,file) {
                        
                        return file.replace(/\.css/i,'.adapter.css');
                    }
                })
			}
        }
    });
    
    grunt.loadTasks('tasks');
    
    grunt.registerTask('default',['adapter']);
};