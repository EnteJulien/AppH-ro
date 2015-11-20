function aperoService($http) {
    return {
        get : function(user) {
            return $http.get('/aperos', {headers : {userid : user._id} });
        },
        update : function(id, data, user){
            return $http.put('/aperos/' + id, data, {headers : {userid : user._id} });
        },
        create : function(data, user) {
            return $http.post('/aperos', data, {headers : {userid : user._id} });
        },
        delete : function(id, user) {
            return $http.delete('/aperos/' + id, {headers : {userid : user._id} });
        }
    }
};
