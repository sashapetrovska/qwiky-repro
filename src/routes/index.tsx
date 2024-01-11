import { component$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { RequestHandler } from '@builder.io/qwik-city';



export const onRequest: RequestHandler = async ({ parseBody, request }) => {
  
  if(request.method == 'POST') {
    
    const e = await parseBody();
      console.log("Received in the server: ", (e as any).magic);
  }
  
};


export default component$(() => {

  const handleformData = $((e: any) => {

    e.formData.set('magic', "new value")
    e.formData.append('alt', 'appended')
  })

  return (
    <>
      <h1>Hi im the repro👋 you should get "new value" in the server but you won't :(
        you instead will get whatever you type in the following input:
      </h1>
        <form method="post" onFormdata$={handleformData} >
          <input   name='magic' />
          <button type="submit">send</button>
        </form>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
