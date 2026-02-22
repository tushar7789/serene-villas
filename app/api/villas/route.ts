import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongoose';
import Villas from '../../../models/villas';

export async function GET () {
    try {
        await dbConnect();
        const allVillas = await Villas.find({});
        return NextResponse.json({allVillas});
    }catch(error : any) { // eslint-disable-line @typescript-eslint/no-explicit-any

        console.log("error:" , error);
        return NextResponse.json({ error: error?.message }, { status: 500 });
    }
}