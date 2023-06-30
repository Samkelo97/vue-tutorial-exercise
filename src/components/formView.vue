<template>
    <h2> Text input</h2>
    <input v-model="text">{{ text }}
    <h2>Checkbox</h2>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">checked:{{ checked }}</label>
    <h2>Multi Checkbox</h2>
    <input type="checkbox" id="cheslyn" v-model="checkedNames" value="cheslyn"/>
    <label for="cheslyn">Cheslyn</label>
    <input type="checkbox" id="Luke" v-model="checkedNames" value="Luke"/>
    <label for="Luke">Luke</label>
    
    <p> checked:
        <pre>{{ checkedNames }}</pre>
    </p>
<h2>Radio</h2>
    <input type="radio" id="one" value="one" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>picked:{{ picked }}</span>

    <h2>Multi Selected</h2>
    <select v-model="multiselected" multiple style="width:100px">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    
    </select>
    <span>selected:{{ multiselected }}</span>
</template>
<script>
export default{
    data(){
        return{text:'', 
        checked:true,
        checkedNames:['cheslyn'],
        picked:'',
        multiselected:' '
    }
    }
}
</script>
