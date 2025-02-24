import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: '4cwvrghn',
    dataset: 'production',
    Perspective : 'published',
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    token: 'skwhSnWj6ZS2Q2MGTzUVld2sL4C54uTaPrx5UKhNj8uWtXvfjso8PqxSt4amS2WWWfvkHXjxMbHiRUEaeYtNXho0MoMBc2Ob3cCt9ij5pwUTJkkc4Xd0eKzxp2YLgBfL6DTi5Y76lmdDxcwGGIoo4vF6hGRc9V2n2yomF9xUlizRsybELjCs'//process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})
export function getPets() {
    return new Promise(async (resolve,reject)=>{
        try {
            const pets = await client.fetch('*[_type == "pet"]')
            resolve(pets)
        } catch (error) {
            reject(error)
        }
    })
}

export function createPet(pet) {
    let defaultPet={
        _type: 'pet',
    };
    let petObj=Object.assign(defaultPet,pet);
    return new Promise(async (resolve,reject)=>{
        try {
            const result = await client.create(petObj)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}
export function updatePet(data) {
    return new Promise(async (resolve,reject)=>{
        try {
            const result = await client.patch(data.id).set(data.setObj).commit();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}
    
export function deletPet(id) {
    return new Promise(async (resolve,reject)=>{
        try {
            const result = await client.delete(id)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}
    