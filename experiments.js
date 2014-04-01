var experiments;

experiments = function(log) {

    return {
        basic: function () {
            global = 'This is the value of global.';
            log('global', 'current', global);
        },
        basicWithVar: function () {
            'use strict';
            var varGlobal = 'This is the value of varGlobal.';
            log('varGlobal', 'current', varGlobal);
        },
        basicWithVarAccidentalOverride: function () {
            'use strict';
            var i = 10;
            log('i', 'current', i);
            var innerFunction = function(){
                for(i=0;i<7;i++){
                    //no-op;
                }
            }

            innerFunction();
            log('i', 'new', i);
        },
        basicWithVarDoubleDeclaration: function () {
            'use strict';
            var i = 10;
            log('i', 'current', i);
            var innerFunction = function(){
                for(var i=0;i<7;i++){
                    //no-op;
                }
            }

            innerFunction();
            log('i', 'new', i);
        }
    };
}(logManger.log);