#import langchain.llms import OpenAI
# for now wiil change to lama later
#from dotenv import load_dotenv
from langchain.callbacks.manager import CallbackManager
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain.llms import Ollama
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

"""
This model is got from install ollama
And running 'ollama run llama2-uncensored
Its about 3gb and you need an okay gpu to run it
"""

def generate(transcript, jury_data, sentencing_records, statements):
    llm = Ollama(
        model="llama3.1"
        #callback_manager=CallbackManager([StreamingStdOutCallbackHandler()]
        )
    
    prompt_template_name = PromptTemplate(
        input_variables = ['transcript', 'jury_data', 'sentencing_records', 'statements'],
        template = "I am trying to see if I have a potential Racial Justice Act of California. Provided here is the transpcript of the trial {transcript}, here is the jury selection data {jury_data}, here is the sentencing records {sentencing_records}, and here are the prosecutor and defense statements {statements}."
    )

    name_chain = LLMChain(llm=llm, prompt=prompt_template_name, output_key="pet_name")

    response = name_chain("transcript", transcript, "jury_data", jury_data, "sentencing_records", sentencing_records, "statements", statements)


    return response

if __name__ == "__main__":
    print(generate("Black"))
