class ApplicationController < ActionController::API
  def index
    render(json: { success: true })
  end
end
