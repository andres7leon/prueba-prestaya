# Versiones para desarrollar el proyecto

- Angular: 9.1
- NodeJS: 12.17

# Librerías Implementadas

- Bootstrap
- Material-design-icons
- Sweetalert2
- Json-server

# Correr el proyecto

```sh
npm i

ng serve

json-server --watch db.json
```
# Validaciones que se tuvieron presente

- Se valida registro de usuario que la cedula y correo no existan para registrarse
- Cuando se es un usuario nuevo siempre se va a aprobar el primer crédito
- Las aprobaciones después del primer crédito es aleatoriamente
- No se pueden pedir créditos nuevos si tiene uno activo y este no se ha pagado
- No se permite pedir un crédito si ya tiene un crédito rechazado


# A tener en cuenta
- Se ajusta toda la experiencia a responsive 
- Se crea una vista Admin para poder ver todos los usuarios y créditos que se han registrado
- El valor base de cuanto se puede prestar están en los enviroments
- Se crearon rutas con lazyLoad
- Se usaron interfaces o modelos para los datos
- Se genera una estructura la cual puede ser escalable

## Espero sea de su agradado el poder correr y revisar este proyecto el cual pude culminar en 4 días, me hubiera gustado poder hacer las pruebas unitarias, pero lastimosamente no me alcanzo el tiempo.
