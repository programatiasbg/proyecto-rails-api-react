# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do

  # Podemos alojar carias URL en una misma linea, si los metodos, header u otro, son los mismos
  allow do
    origins 'http://localhost:5173' || 'http://127.0.0.1:5173' ||ENV['ALLOWED_ORIGIN']
    # origins 'https://la-url-de-la-pagina.com'
    resource '*',
            headers: :any,
            methods: %i[get post put patch delete options head]
  end

  #  Referenciamo una URL de estta forma, si los metodos, header u otro, dofieren
  allow do
    origins ENV['ALLOWED_ORIGIN'] || 'http://localhost:8000'
    resource '/search', headers: :any, methods: %i[get]
  end

end

Rails.logger.info("Cors Configured to allow origin: #{ENV['ALLOWED_ORIGIN'] || 'http://localhost:5173'}")

# For production (or any other environment), run the server with the ALLOWED_ORIGIN environment variable set to the origin that requires access.
