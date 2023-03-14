export const SPOTLIGHT1_OPTIONS = {
    position: {
        x: 60,
        y: 37,
        z: 45,
    },
    angle: Math.PI * 0.2,
    modelPosition: {
        x: 50,
        y: 0,
        z: 66
    },
    modelRotation: {
        x: Math.PI * 1.5,
        y: Math.PI * 1.5,
        z: 0,
    },
    color: 'rgb(99, 20, 118);'
};

export const SPOTLIGHT2_OPTIONS = {
    position: {
        x: -60,
        y: 37,
        z: 45,
    },
    angle: Math.PI * 0.2,
    modelPosition: {
        x: -68,
        y: 0,
        z: 23
    },
    modelRotation: {
        x: -1.5707963267948966,
        y: 2.399790724378488,
        z: 0,
    },
    color: 'rgb(10,200,10)'
};

export const SPOTLIGHT3_OPTIONS = {
    position: {
        x: 0,
        y: 30,
        z: -55
    },
    angle: Math.PI * 0.2,
    modelPosition: {
        x: 22,
        y: 0,
        z: -40
    },
    modelRotation: {
        x: -1.5707963267948966,
        y: Math.PI * 2,
        z: Math.PI * 2,
    },
    color: 'cyan'
};

export type TPosition = {
    x: number;
    y: number;
    z: number;
}
export const VOLUMETRIC_SPOTLIGHT1 = {
    position: {
        x: 60,
        y: 35,
        z: 45,
    },
    color: 'rgb(99, 20, 118)',
};

export const VOLUMETRIC_SPOTLIGHT2 = {
    position: {
        x: -60,
        y: 37,
        z: 45,
    },
    color: 'rgb(10,200,10)',
};

export const VOLUMETRIC_SPOTLIGHT3 = {
    position: {
        x: 0,
        y: 30,
        z: -55
    },
    color: 'cyan',
};