    import { api } from './api'; 

    export async function createOffer(offerPayload) {
        return api.post(`/offres`, offerPayload);
    }