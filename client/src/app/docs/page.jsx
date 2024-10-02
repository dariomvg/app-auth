"use client"; 
import { useAuth } from "@/contexts/ContextAuth";
import "./docs.css";
import { useRouter } from "next/navigation";

export default function docs() {
    const {username} = useAuth(); 
    const router = useRouter(); 
    if(!username.token) {
      router.push("/login"); 
    }
  
  return (
    <section>
      <h1 className="title-docs">Documentación: Estructuras de Datos y Patrones de Diseño</h1>

      <nav>
        <a href="#estructuras-datos">Estructuras de Datos</a>
        <a href="#patrones-diseno">Patrones de Diseño</a>
      </nav>

      <div class="container">
        <aside class="sidebar">
          <h2>Tabla de Contenidos</h2>
          <ul>
            <li>
              <a href="#estructuras-datos">Estructuras de Datos</a>
            </li>
            <ul>
              <li>
                <a href="#listas">Listas</a>
              </li>
              <li>
                <a href="#pilas">Pilas</a>
              </li>
              <li>
                <a href="#colas">Colas</a>
              </li>
              <li>
                <a href="#arboles">Árboles</a>
              </li>
              <li>
                <a href="#grafos">Grafos</a>
              </li>
            </ul>
            <li>
              <a href="#patrones-diseno">Patrones de Diseño</a>
            </li>
            <ul>
              <li>
                <a href="#singleton">Singleton</a>
              </li>
              <li>
                <a href="#factory">Factory</a>
              </li>
              <li>
                <a href="#observer">Observer</a>
              </li>
              <li>
                <a href="#strategy">Strategy</a>
              </li>
              <li>
                <a href="#decorator">Decorator</a>
              </li>
            </ul>
          </ul>
        </aside>

        <section class="content">
          <h2 id="estructuras-datos">Estructuras de Datos</h2>
          <p>
            Las estructuras de datos son formas de organizar y almacenar datos
            para que puedan ser accedidos y manipulados eficientemente. Aquí se
            describen algunas de las más comunes.
          </p>

          <h3 id="listas">Listas</h3>
          <p>
            Las listas son colecciones de elementos que permiten la inserción,
            eliminación y acceso a los elementos por su índice. Pueden ser
            implementadas de diferentes maneras, como listas enlazadas o
            arreglos.
          </p>

          <h3 id="pilas">Pilas</h3>
          <p>
            Las pilas son estructuras de datos LIFO (Last In, First Out). Los
            elementos son agregados y eliminados desde el mismo extremo, llamado
            la cima de la pila.
          </p>

          <h3 id="colas">Colas</h3>
          <p>
            Las colas son estructuras de datos FIFO (First In, First Out), donde
            los elementos se agregan al final y se eliminan del frente.
          </p>

          <h3 id="arboles">Árboles</h3>
          <p>
            Los árboles son estructuras jerárquicas de datos que consisten en
            nodos, donde cada nodo tiene un valor y puede tener cero o más nodos
            hijos.
          </p>

          <h3 id="grafos">Grafos</h3>
          <p>
            Los grafos son estructuras compuestas por nodos conectados por
            aristas. Los grafos pueden ser dirigidos o no dirigidos, y se usan
            para modelar relaciones complejas entre entidades.
          </p>

          <h2 id="patrones-diseno">Patrones de Diseño</h2>
          <p>
            Los patrones de diseño son soluciones típicas a problemas comunes en
            el diseño de software. Estos son algunos de los más usados.
          </p>

          <h3 id="singleton">Singleton</h3>
          <p>
            El patrón Singleton asegura que una clase tenga una única instancia
            y proporciona un punto global de acceso a dicha instancia.
          </p>

          <h3 id="factory">Factory</h3>
          <p>
            El patrón Factory abstrae la creación de objetos, permitiendo que
            las subclases decidan qué clase instanciar.
          </p>

          <h3 id="observer">Observer</h3>
          <p>
            El patrón Observer define una dependencia uno a muchos entre
            objetos, de manera que cuando un objeto cambia su estado, todos sus
            dependientes son notificados y actualizados automáticamente.
          </p>

          <h3 id="strategy">Strategy</h3>
          <p>
            El patrón Strategy permite definir una familia de algoritmos,
            encapsular cada uno de ellos, y hacerlos intercambiables.
          </p>

          <h3 id="decorator">Decorator</h3>
          <p>
            El patrón Decorator permite agregar funcionalidades a un objeto
            dinámicamente, sin modificar su estructura existente.
          </p>
        </section>
      </div>
    </section>
  );
}
