
<script>

    import {globalChaosService} from '../../services'

    async function createChaos() {

        const chaosPayload = await globalChaosService.get();

        console.log('chaos payload', {chaosPayload});

        return chaosPayload;

    }


</script>





<slot {createChaos} ></slot>
