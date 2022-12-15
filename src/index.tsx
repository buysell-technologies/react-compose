/**
 * Composes multiple render prop components
 */
 export function compose<
 P extends Record<string, unknown>,
 A extends Record<string, unknown>
>(
 CompA: React.FC<P & { render: React.FC<A> }>
): React.FC<Omit<P, "render"> & { render: React.FC<A> }>;

export function compose<
 P extends Record<string, unknown>,
 A extends Record<string, unknown>,
 B extends Record<string, unknown>
>(
 CompA: React.FC<P & { render: React.FC<A> }>,
 CompB: React.FC<A & { render: React.FC<B> }>
): React.FC<Omit<P, "render"> & { render: React.FC<A & B> }>;

export function compose<
 P extends Record<string, unknown>,
 A extends Record<string, unknown>,
 B extends Record<string, unknown>,
 C extends Record<string, unknown>
>(
 CompA: React.FC<P & { render: React.FC<A> }>,
 CompB: React.FC<A & { render: React.FC<B> }>,
 CompC: React.FC<A & B & { render: React.FC<C> }>
): React.FC<Omit<P, "render"> & { render: React.FC<A & B & C> }>;

export function compose<
 P extends Record<string, unknown>,
 A extends Record<string, unknown>,
 B extends Record<string, unknown>,
 C extends Record<string, unknown>,
 D extends Record<string, unknown>
>(
 CompA: React.FC<P & { render: React.FC<A> }>,
 CompB: React.FC<A & { render: React.FC<B> }>,
 CompC: React.FC<A & B & { render: React.FC<C> }>,
 CompD: React.FC<A & B & C & { render: React.FC<D> }>
): React.FC<Omit<P, "render"> & { render: React.FC<A & B & C & D> }>;

export function compose<
 P extends Record<string, unknown>,
 A extends Record<string, unknown>,
 B extends Record<string, unknown>,
 C extends Record<string, unknown>,
 D extends Record<string, unknown>,
 E extends Record<string, unknown>
>(
 CompA: React.FC<P & { render: React.FC<A> }>,
 CompB: React.FC<A & { render: React.FC<B> }>,
 CompC: React.FC<A & B & { render: React.FC<C> }>,
 CompD: React.FC<A & B & C & { render: React.FC<D> }>,
 CompE: React.FC<A & B & C & D & { render: React.FC<E> }>
): React.FC<Omit<P, "render"> & { render: React.FC<A & B & C & D & E> }>;

export function compose<
 P extends Record<string, unknown>,
 A extends Record<string, unknown>,
 B extends Record<string, unknown>,
 C extends Record<string, unknown>,
 D extends Record<string, unknown>,
 E extends Record<string, unknown>,
 F extends Record<string, unknown>
>(
 CompA: React.FC<P & { render: React.FC<A> }>,
 CompB: React.FC<A & { render: React.FC<B> }>,
 CompC: React.FC<A & B & { render: React.FC<C> }>,
 CompD: React.FC<A & B & C & { render: React.FC<D> }>,
 CompE: React.FC<A & B & C & D & { render: React.FC<E> }>,
 CompF: React.FC<A & B & C & D & E & { render: React.FC<F> }>
): React.FC<Omit<P, "render"> & { render: React.FC<A & B & C & D & E & F> }>;

export function compose<
 P extends Record<string, unknown>,
 A extends Record<string, unknown>,
 B extends Record<string, unknown>,
 C extends Record<string, unknown>,
 D extends Record<string, unknown>,
 E extends Record<string, unknown>,
 F extends Record<string, unknown>,
 G extends Record<string, unknown>
>(
 CompA: React.FC<P & { render: React.FC<A> }>,
 CompB: React.FC<A & { render: React.FC<B> }>,
 CompC: React.FC<A & B & { render: React.FC<C> }>,
 CompD: React.FC<A & B & C & { render: React.FC<D> }>,
 CompE: React.FC<A & B & C & D & { render: React.FC<E> }>,
 CompF: React.FC<A & B & C & D & E & { render: React.FC<F> }>,
 CompG: React.FC<A & B & C & D & E & F & { render: React.FC<G> }>
): React.FC<
 Omit<P, "render"> & { render: React.FC<A & B & C & D & E & F & G> }
>;

export function compose<
 P extends Record<string, unknown>,
 A extends Record<string, unknown>,
 B extends Record<string, unknown>,
 C extends Record<string, unknown>,
 D extends Record<string, unknown>,
 E extends Record<string, unknown>,
 F extends Record<string, unknown>,
 G extends Record<string, unknown>,
 H extends Record<string, unknown>
>(
 CompA: React.FC<P & { render: React.FC<A> }>,
 CompB: React.FC<A & { render: React.FC<B> }>,
 CompC: React.FC<A & B & { render: React.FC<C> }>,
 CompD: React.FC<A & B & C & { render: React.FC<D> }>,
 CompE: React.FC<A & B & C & D & { render: React.FC<E> }>,
 CompF: React.FC<A & B & C & D & E & { render: React.FC<F> }>,
 CompG: React.FC<A & B & C & D & E & F & { render: React.FC<G> }>,
 CompH: React.FC<A & B & C & D & E & F & G & { render: React.FC<H> }>
): React.FC<
 Omit<P, "render"> & { render: React.FC<A & B & C & D & E & F & G & H> }
>;

export function compose<
 P extends Record<string, unknown>,
 A extends Record<string, unknown>,
 B extends Record<string, unknown>,
 C extends Record<string, unknown>,
 D extends Record<string, unknown>,
 E extends Record<string, unknown>,
 F extends Record<string, unknown>,
 G extends Record<string, unknown>,
 H extends Record<string, unknown>
>(
 CompA: React.FC<P & { render: React.FC<A> }>,
 CompB?: React.FC<A & { render: React.FC<B> }>,
 CompC?: React.FC<A & B & { render: React.FC<C> }>,
 CompD?: React.FC<A & B & C & { render: React.FC<D> }>,
 CompE?: React.FC<A & B & C & D & { render: React.FC<E> }>,
 CompF?: React.FC<A & B & C & D & E & { render: React.FC<F> }>,
 CompG?: React.FC<A & B & C & D & E & F & { render: React.FC<G> }>,
 CompH?: React.FC<A & B & C & D & E & F & G & { render: React.FC<H> }>
) {
 if (!CompB) return CompA;

 if (!CompC) {
   const CompAB: React.FC<P & { render: React.FC<A & B> }> = (props) => {
     return (
       <CompA
         {...props}
         render={(a) => (
           <CompB {...a} render={(b) => props.render({ ...a, ...b })} />
         )}
       />
     );
   };

   return CompAB;
 }

 if (!CompD) {
   const CompABC: React.FC<P & { render: React.FC<A & B & C> }> = (props) => {
     return (
       <CompA
         {...props}
         render={(a) => (
           <CompB
             {...a}
             render={(b) => (
               <CompC
                 {...a}
                 {...b}
                 render={(c) => props.render({ ...a, ...b, ...c })}
               />
             )}
           />
         )}
       />
     );
   };

   return CompABC;
 }

 if (!CompE) {
   const CompABCD: React.FC<P & { render: React.FC<A & B & C & D> }> = (
     props
   ) => {
     return (
       <CompA
         {...props}
         render={(a) => (
           <CompB
             {...a}
             render={(b) => (
               <CompC
                 {...a}
                 {...b}
                 render={(c) => (
                   <CompD
                     {...a}
                     {...b}
                     {...c}
                     render={(d) => props.render({ ...a, ...b, ...c, ...d })}
                   />
                 )}
               />
             )}
           />
         )}
       />
     );
   };

   return CompABCD;
 }

 if (!CompF) {
   const CompABCDE: React.FC<P & { render: React.FC<A & B & C & D & E> }> = (
     props
   ) => {
     return (
       <CompA
         {...props}
         render={(a) => (
           <CompB
             {...a}
             render={(b) => (
               <CompC
                 {...a}
                 {...b}
                 render={(c) => (
                   <CompD
                     {...a}
                     {...b}
                     {...c}
                     render={(d) => (
                       <CompE
                         {...a}
                         {...b}
                         {...c}
                         {...d}
                         render={(e) =>
                           props.render({ ...a, ...b, ...c, ...d, ...e })
                         }
                       />
                     )}
                   />
                 )}
               />
             )}
           />
         )}
       />
     );
   };

   return CompABCDE;
 }

 if (!CompG) {
   const CompABCDEF: React.FC<
     P & { render: React.FC<A & B & C & D & E & F> }
   > = (props) => {
     return (
       <CompA
         {...props}
         render={(a) => (
           <CompB
             {...a}
             render={(b) => (
               <CompC
                 {...a}
                 {...b}
                 render={(c) => (
                   <CompD
                     {...a}
                     {...b}
                     {...c}
                     render={(d) => (
                       <CompE
                         {...a}
                         {...b}
                         {...c}
                         {...d}
                         render={(e) => (
                           <CompF
                             {...a}
                             {...b}
                             {...c}
                             {...d}
                             {...e}
                             render={(f) =>
                               props.render({
                                 ...a,
                                 ...b,
                                 ...c,
                                 ...d,
                                 ...e,
                                 ...f,
                               })
                             }
                           />
                         )}
                       />
                     )}
                   />
                 )}
               />
             )}
           />
         )}
       />
     );
   };

   return CompABCDEF;
 }

 if (!CompH) {
   const CompABCDEFG: React.FC<
     P & { render: React.FC<A & B & C & D & E & F & G> }
   > = (props) => {
     return (
       <CompA
         {...props}
         render={(a) => (
           <CompB
             {...a}
             render={(b) => (
               <CompC
                 {...a}
                 {...b}
                 render={(c) => (
                   <CompD
                     {...a}
                     {...b}
                     {...c}
                     render={(d) => (
                       <CompE
                         {...a}
                         {...b}
                         {...c}
                         {...d}
                         render={(e) => (
                           <CompF
                             {...a}
                             {...b}
                             {...c}
                             {...d}
                             {...e}
                             render={(f) => (
                               <CompG
                                 {...a}
                                 {...b}
                                 {...c}
                                 {...d}
                                 {...e}
                                 {...f}
                                 render={(g) =>
                                   props.render({
                                     ...a,
                                     ...b,
                                     ...c,
                                     ...d,
                                     ...e,
                                     ...f,
                                     ...g,
                                   })
                                 }
                               />
                             )}
                           />
                         )}
                       />
                     )}
                   />
                 )}
               />
             )}
           />
         )}
       />
     );
   };

   return CompABCDEFG;
 }

 const CompABCDEFGH: React.FC<
   P & { render: React.FC<A & B & C & D & E & F & G & H> }
 > = (props) => {
   return (
     <CompA
       {...props}
       render={(a) => (
         <CompB
           {...a}
           render={(b) => (
             <CompC
               {...a}
               {...b}
               render={(c) => (
                 <CompD
                   {...a}
                   {...b}
                   {...c}
                   render={(d) => (
                     <CompE
                       {...a}
                       {...b}
                       {...c}
                       {...d}
                       render={(e) => (
                         <CompF
                           {...a}
                           {...b}
                           {...c}
                           {...d}
                           {...e}
                           render={(f) => (
                             <CompG
                               {...a}
                               {...b}
                               {...c}
                               {...d}
                               {...e}
                               {...f}
                               render={(g) => (
                                 <CompH
                                   {...a}
                                   {...b}
                                   {...c}
                                   {...d}
                                   {...e}
                                   {...f}
                                   {...g}
                                   render={(h) =>
                                     props.render({
                                       ...a,
                                       ...b,
                                       ...c,
                                       ...d,
                                       ...e,
                                       ...f,
                                       ...g,
                                       ...h,
                                     })
                                   }
                                 />
                               )}
                             />
                           )}
                         />
                       )}
                     />
                   )}
                 />
               )}
             />
           )}
         />
       )}
     />
   );
 };

 return CompABCDEFGH;
}
