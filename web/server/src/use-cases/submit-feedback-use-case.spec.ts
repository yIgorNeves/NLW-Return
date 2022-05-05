import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailkSpy = jest.fn();

const submitFeedbqack = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy },
    {sendMail: sendMailkSpy}
)

describe('Submit feedback', ()=>{
    it('should be able to submit a feedback', async ()=>{     
        
        await expect(submitFeedbqack.execute({
            type:'BUG',
            comment: 'Exemple',
            screenshot: 'data:image/png;base64, 87a4sd46+f5ds4g65df1g65d1f61gfds'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailkSpy).toHaveBeenCalled();
    });

    it('should not be able to submit feedback without type', async ()=>{     
        
        await expect(submitFeedbqack.execute({
            type:'',
            comment: 'Exemple',
            screenshot: 'data:image/png;base64, 87a4sd46+f5ds4g65df1g65d1f61gfds'
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback without comment', async ()=>{     
        
        await expect(submitFeedbqack.execute({
            type:'BUG',
            comment: '',
            screenshot: 'data:image/png;base64, 87a4sd46+f5ds4g65df1g65d1f61gfds'
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback with wrong type of screenshot', async ()=>{     
        
        await expect(submitFeedbqack.execute({
            type:'BUG',
            comment: 'Exemple',
            screenshot: 'teste.jpg'
        })).rejects.toThrow();
    });
});

